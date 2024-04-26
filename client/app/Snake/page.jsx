"use client"
import React from 'react';
import './snake.css'
import Tile from './Tile';

var tcount = 0;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameMatrix: [],
            snakeList: [[1, 1], [1, 2], [2, 2]],
            increment: [1, 0],
            gameOver: false,
            food: [10, 10],
            isFoodVisible: true
        }
    }

    generateFood = (matrix) => {
        let x, y;
        do {
            x = parseInt(Math.random() * 18);
            y = parseInt(Math.random() * 18);
        } while (matrix[x][y] === 1); // Ensure food doesn't spawn on snake

        const gameMatrix = matrix.map(row => [...row]);
        gameMatrix[x][y] = 2;
        return [gameMatrix, [x, y]];
    }

    gameTick = () => {
        const body = [...this.state.snakeList];
        tcount = (tcount + 1) % 40;
    
        if (body.length === 0) return; // If the snake's body is empty, return
    
        const newInc = this.state.increment;
        const newx = (body[0][0] + newInc[0] + 19) % 19, newy = (body[0][1] + newInc[1] + 19) % 19;
        if (body.some(i => i[0] === newx && i[1] === newy)) this.setState({ gameOver: true });
        else {
            let { gameMatrix, food, isFoodVisible } = this.state;
            if (!isFoodVisible) {
                [gameMatrix, food] = this.generateFood(gameMatrix);
                isFoodVisible = true;
            }
            body.unshift([newx, newy]);
            if (!(newx === food[0] && newy === food[1])) {
                body.pop();
            } else {
                isFoodVisible = false;
            }
            this.setState({ snakeList: body, gameMatrix, food, isFoodVisible });
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const keyboard = document.querySelector('body');
        keyboard.addEventListener('keydown', e => {
            let newInc;
            if (e.key === 'ArrowUp') newInc = [-1, 0];
            else if (e.key === 'ArrowDown') newInc = [1, 0];
            else if (e.key === 'ArrowLeft') newInc = [0, -1];
            else if (e.key === 'ArrowRight') newInc = [0, 1];
            if (newInc && (newInc[0] + this.state.increment[0] === 0 && newInc[1] + this.state.increment[1] === 0)) return;
            const newx = (this.state.snakeList[0][0] + newInc[0] + 19) % 19, newy = (this.state.snakeList[0][1] + newInc[1] + 19) % 19;
            if (this.state.snakeList.some(i => i[0] === newx && i[1] === newy)) this.setState({ gameOver: true });
            else this.setState({ increment: newInc });
        });
        window.fnInterval = setInterval(() => {
            this.gameTick();
        }, 150);
    }

    static getDerivedStateFromProps(props, state) {
        const temp = Array.from({ length: 19 }, () => Array(19).fill(0));

        if (state.isFoodVisible) temp[state.food[0]][state.food[1]] = 2;
        state.snakeList.forEach(([x, y]) => {
            temp[x][y] = 1;
        });

        return { gameMatrix: temp };
    }

    renderGameMatrix = () => {
        return this.state.gameMatrix.map((row) =>
            row.map((t) => <Tile color={t === 2 ? "red" : t ? "blue" : "lightgrey"} />)
        );
    }

    restartGame = () => {
        this.setState({
            snakeList: [[1, 1], [1, 2], [2, 2]],
            increment: [1, 0],
            gameOver: false
        });
    }

    render() {
        return (
            <>
                <div className="game">
                    <div className="main-game-container">
                        <div className="innergamecontainer">
                            {!this.state.gameOver ? this.renderGameMatrix() : "Game Over"}
                            <h1>{this.state.snakeList.length - 2}</h1>
                            <button onClick={this.restartGame}>Restart Game</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Game;