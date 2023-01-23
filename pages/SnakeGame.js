import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const SNAKE_MOVEMENT_INTERVAL = 500;
import DropDown from '../pages/DropDown.js';

import MoneyTrack from '../pages/MoneyTrack.js';

function SnakeGame() {
  // TODO: Set the initial Snake position
  const [board, setBoard] = useState(
    Array(9)
      .fill(0)
      .map((row) => new Array(9).fill(0))
  );
  let interval;

  const GRID_EMPTY = 0;
  const GRID_BODY = 1;
  const GRID_HEAD = 2;
  const GRID_FOOD = 3;

  function updateGameState() {
    var newBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    /*     while node = snake.head.prev {
      newBoard[node.x][node.y] = 1
    } */

    setBoard(newBoard);
  }

  function Draw() {
    return (
      <>
        <View style={{ flex: 1 }}>
          {board.map((row, rowIndex) => {
            return (
              <View style={styles.gridRow} key={rowIndex}>
                {row.map((item, itemIndex) => {
                  if (item === GRID_EMPTY) {
                    return (
                      <View style={styles.gridItemEmpty} key={itemIndex}></View>
                    );
                  } else if (item === GRID_BODY) {
                    return (
                      <View style={styles.gridItemBody} key={itemIndex}></View>
                    );
                  } else if (item === GRID_HEAD) {
                    return (
                      <View style={styles.gridItemHead} key={itemIndex}></View>
                    );
                  } else {
                    return (
                      <View style={styles.gridItemFood} key={itemIndex}></View>
                    );
                  }
                })}
              </View>
            );
          })}
        </View>
      </>
    );
  }

  function createSnake(pos_x, pos_y) {
    var snake = {};
    function createNode(x, y, direction) {
      var node = {};
      node.next = null;
      node.prev = null;
      node.x = x;
      node.y = y;
      node.direction = direction;
      return node;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateGameState();
    }, SNAKE_MOVEMENT_INTERVAL);
    return () => clearInterval(interval);
  }, [board]);

  return (
    <>
      <View style={styles.dropMoney}>
        <View style={styles.drop}>
          <DropDown />
        </View>
        <View style={styles.money}>
          <MoneyTrack />
        </View>
      </View>

      <Text style={styles.titlePosition}> Snake Game 🐍</Text>

      <View style={styles.outercontainer}>
        <View style={styles.box}>{Draw()}</View>
        <View style={styles.arrowContainer}>
          <View style={styles.arrowUpContainer}>
            <Image
              style={styles.arrowImage}
              source={require('../assets/arrow.png')}></Image>
          </View>
          <View style={styles.arrowDownContainer}>
            <Image
              style={styles.arrowImage}
              source={require('../assets/arrow.png')}></Image>
          </View>
          <View style={styles.arrowLeftContainer}>
            <Image
              style={styles.arrowImage}
              source={require('../assets/arrow.png')}></Image>
          </View>
          <View style={styles.arrowRightContainer}>
            <Image
              style={styles.arrowImage}
              source={require('../assets/arrow.png')}></Image>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outercontainer: {
    flex: 1,
    position: 'relative',
    left: 20,
    top: 20,

    //justifyContent: 'center'
  },
  box: {
    width: 300,
    height: 300,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
    //justifyContent: 'center'
    marginLeft: 30,
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
  },
  gridItemEmpty: {
    flex: 1,
    margin: 1,
    backgroundColor: 'black',
  },
  gridItemBody: {
    flex: 1,
    margin: 1,
    backgroundColor: 'white',
  },
  gridItemHead: {
    flex: 1,
    margin: 1,
    backgroundColor: 'yellow',
  },
  gridItemFood: {
    flex: 1,
    margin: 1,
    backgroundColor: 'red',
  },
  money: {
    //paddingBottom: 200,
    marginLeft: 20,
    marginTop: -60,
    marginBottom: 70,
    /*position: 'relative',
    bottom: 70,*/
  },
  dropMoney: {
    //marginBottom: 10,
    backgroundColor: '',
    //height: 180
  },
  drop: {
    marginTop: 40,
    marginLeft: 225,
    /*position: 'relative',
    top: 10,
    left: 230*/
  },
  titlePosition: {
    /*position: 'relative',
    bottom: 20,
    right: 60,*/

    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    arrowContainer: {
    width: 100,
    height: 100,
    marginLeft: 130,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 45,
    flexDirection: 'row',
  },
  arrowUpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: 25,
    transform: [{ rotate: '90deg' }],
  },
  arrowLeftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 25,
    left: -20,
    transform: [{ rotate: '0deg' }],
  },
  arrowDownContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 70,
    left: 25,
    transform: [{ rotate: '270deg' }],
  },
  arrowRightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 25,
    left: 70,
    transform: [{ rotate: '180deg' }],
  },
arrowImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
});
export default SnakeGame;
