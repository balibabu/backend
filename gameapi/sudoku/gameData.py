import random
import pickle
import os

class GameData:

    def __init__(self):
        self._path='sudoku_data/grids.pkl'
        self._savedpath='sudoku_data/savedgrids.pkl'
        if not os.path.isfile(self._path):
            os.makedirs('sudoku_data', exist_ok=True)
            with open(self._path, 'wb') as file:
                pickle.dump({}, file)
        if not os.path.isfile(self._savedpath):
            with open(self._savedpath,'wb') as file:
                pickle.dump({},file)

        with open(self._path, 'rb') as pklFile:
            self._data = pickle.load(pklFile)
        with open(self._savedpath,'rb') as pklFile:
            self._savedData=pickle.load(pklFile)

    def get_grid(self,level,userid):
        if (level,userid) in self._savedData:
            return self._data[level],self._savedData[(level,userid)]

        if level in self._data:
            return self._data[level],None

        self._data[level]=generate_sudoku(10+level)
        with open(self._path,'wb') as pklFile:
            pickle.dump(self._data,pklFile)

        return self._data[level],None

    def save_state(self,level,grid,userid):
        self._savedData[(level,userid)]=grid
        with open(self._savedpath,'wb') as pklFile:
            pickle.dump(self._savedData,pklFile)

    def game_completed(self,level,userid):
        if (level,userid) in self._savedData:
            self._savedData.pop((level,userid))


def generate_sudoku(clues_to_remove):
    n = 9
    grid = [[0] * n for _ in range(n)]
    fill(grid)
    remove_clues(grid,clues_to_remove)
    return grid

def fill(grid):
    n = 9
    for row in range(n):
        for col in range(n):
            if grid[row][col] == 0:
                values = list(range(1, n + 1))
                random.shuffle(values)
                for value in values:
                    if is_valid(grid, row, col, value):
                        grid[row][col] = value
                        if fill(grid):
                            return True
                        grid[row][col] = 0
                return False
    return True

def is_valid(grid, row, col, value):
    for i in range(9):
        if grid[row][i] == value or grid[i][col] == value:
            return False
        
    box_row = 3 * (row // 3)
    box_col = 3 * (col // 3)
    for i in range(3):
        for j in range(3):
            if grid[box_row + i][box_col + j] == value:
                return False
    return True

def remove_clues(grid, num_clues):
    n = 9
    cells = [(row, col) for row in range(n) for col in range(n)]
    for i in range(50):
        random.shuffle(cells)
    for i in range(num_clues):
        x,y=cells[i]
        grid[x][y]=0