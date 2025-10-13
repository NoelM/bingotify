// main.go
package main

import (
	"fmt"
	"math/rand"
	"os"
	"reflect"
	"slices"
	"time"

	svg "github.com/ajstarks/svgo"
)

const StripLen = 75
const CardsPerStrip = 5
const NumbersPerCard = StripLen / CardsPerStrip
const LinePerCard = 3
const ColsPerCard = 8
const NumbersPerLine = NumbersPerCard / LinePerCard

var ReplacedCount int

func main() {
	rnd := rand.New(rand.NewSource(time.Now().UnixNano()))
	strips := generateStrips(100, rnd)

	file, err := os.Create("strips.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	for i, strip := range strips {
		file.WriteString(fmt.Sprintf("strip %03d\n", i))

		for j, num := range strip {
			if j > 0 && j%15 == 0 {
				file.WriteString("\n")
			}

			file.WriteString(fmt.Sprintf("%2d ", num))
		}

		file.WriteString("\n")
	}
	//generateCards(0, strips[0])
}

func generateStrip() []int {
	rnd := rand.New(rand.NewSource(time.Now().UnixMilli()))

	cards := make([][][]int, CardsPerStrip)
	for cardId := range cards {
		cards[cardId] = make([][]int, LinePerCard)
		for lineId := range cards[cardId] {
			cards[cardId][lineId] = make([]int, ColsPerCard)
		}
	}

	nums := make([]int, StripLen)
	for n := range nums {
		nums[n] = n + 1
	}

	for card := range cards {
		for line := range cards[card] {

			cnt := 0
			for cnt < NumbersPerLine {
				id := rnd.Intn(len(nums))
				col := nums[id] / 10

				if cards[card][line][col] != 0 {
					if len(nums) < 2*NumbersPerLine {

						replaced := false
						for localCard := range cards {
							for localLine := range cards[localCard] {
								if cards[localCard][localLine][col] == 0 {
									// We found an empty place at localCard & localLine
									for localCol := range cards[localCard][localLine] {
										if cards[localCard][localLine][localCol] != 0 && cards[card][line][localCol] == 0 {
											// We found a number to swap at localCol, empty at card/line, filled at localCard/localLine
											cards[localCard][localLine][localCol], cards[card][line][localCol] = cards[card][line][localCol], cards[localCard][localLine][localCol]

											cards[localCard][localLine][col] = nums[id]

											nums = append(nums[:id], nums[id+1:]...)
											replaced = true
											ReplacedCount += 1
											cnt += 1

											break
										}
									}
								}
								if replaced {
									break
								}
							}
							if replaced {
								break
							}
						}
					}
					continue
				}

				cards[card][line][col] = nums[id]
				nums = append(nums[:id], nums[id+1:]...)
				cnt += 1
			}
		}
	}

	var strip []int
	for cardId, card := range cards {
		for lineId, line := range card {
			for _, n := range line {
				if n == 0 {
					continue
				}

				strip = append(strip, n)
			}
			slices.Sort(strip[cardId*NumbersPerCard+lineId*NumbersPerLine : cardId*NumbersPerCard+(lineId+1)*NumbersPerLine])
		}
	}

	return strip
}

func verifyUnicity(strips [][]int) bool {
	hasBeenEqual := false

	for i := range len(strips) {
		for j := i + 1; j < len(strips); j += 1 {
			if reflect.DeepEqual(strips[i], strips[j]) {
				hasBeenEqual = true
				strips[j] = generateStrip()
			}
		}
	}

	return hasBeenEqual
}

func generateStrips(numberOfStrips int, rnd *rand.Rand) [][]int {
	strips := make([][]int, numberOfStrips)

	for i := range numberOfStrips {
		strips[i] = generateStrip()
	}

	for {
		fmt.Println("unicity")
		if ok := verifyUnicity(strips); !ok {
			break
		}
	}

	return strips
}

func generateCards(stripId int, strip []int) {
	out, err := os.Create(fmt.Sprintf("strip_%03d.svg", stripId))
	if err != nil {
		panic(err)
	}
	defer out.Close()

	width, height := 2480, 3508

	canvas := svg.New(out)
	canvas.Start(width, height)

	hMargin := 100
	vMargin := 50
	rectWidth := width - 2*hMargin
	rectHeight := height/5 - 2*vMargin

	numbersPerCard := 15
	numberOfCards := len(strip) / numbersPerCard

	numberOfLines := 3
	numberPerLine := 8

	for cardId := range numberOfCards {
		canvas.CenterRect(
			width/2,
			cardId*height/numberOfCards+height/(2*numberOfCards),
			rectWidth,
			rectHeight,
			"rx:50;ry:50;fill:none;stroke:black;stroke-width:5;vector-effect:non-scaling-stroke",
		)

		canvas.CenterRect(
			width/2,
			cardId*height/numberOfCards+height/(2*numberOfCards),
			rectWidth+16,
			rectHeight+16,
			"rx:55;ry:55;fill:none;stroke:black;stroke-width:2;vector-effect:non-scaling-stroke",
		)

		canvas.CenterRect(
			width/2,
			cardId*height/numberOfCards+height/(2*numberOfCards),
			rectWidth+30,
			rectHeight+30,
			"rx:60;ry:60;fill:none;stroke:black;stroke-width:5;vector-effect:non-scaling-stroke",
		)

		card := strip[cardId*numbersPerCard : (cardId+1)*numbersPerCard]
		numberId := 0

		for lineId := range 3 {
			for colId := range 8 {
				xpos := hMargin + rectWidth/(2*numberPerLine) + rectWidth/numberPerLine*colId
				ypos := vMargin + 2*vMargin*cardId + rectHeight*cardId + rectHeight/(2*numberOfLines) + rectHeight/numberOfLines*lineId

				if numberId == 15 || card[numberId]/10 != colId {
					canvas.CenterRect(xpos, ypos, rectWidth/numberPerLine-20, rectHeight/numberOfLines-20,
						"rx:40;ry:40;fill:none;stroke:black;stroke-width:1;vector-effect:non-scaling-stroke")
					continue
				} else {
					canvas.CenterRect(xpos, ypos, rectWidth/numberPerLine-20, rectHeight/numberOfLines-20,
						"rx:40;ry:40;fill:black;opacity:0.1;stroke:black;stroke-width:1;vector-effect:non-scaling-stroke")
					canvas.Text(xpos, ypos, fmt.Sprintf("%d", card[numberId]), "font-family:sans-serif; font-size:50pt; text-anchor:middle; dominant-baseline:middle")
					numberId += 1
				}

			}
		}
	}

	canvas.End()
}
