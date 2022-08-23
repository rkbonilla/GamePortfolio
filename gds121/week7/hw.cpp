#include <iostream>
#include <string>
#include <fstream>
#include <time.h>
#include <windows.h>

using namespace std;

//Swap function for bubble sort.
void swap(int &_a, int &_b)
{
    int temp = _a;
    _a = _b;
    _b = temp;
}

//Player Class
class Players
{
public:
    int score = 100;
    string name = "Roberto";
};

void main()
{
    //Seeding random numbers.
    srand(time(NULL));

    //Creating an array of 11 players.
    Players arr[11];
    int r = 0;

    //Setting each players score to a random number from 0-100.
    for (int i = 0; i < ARRAYSIZE(arr); i++)
    {
        arr[i].score = rand() % (101 - 0) + 0;
    }

    //Reading in the information if there is any.
    ifstream fin;
    fin.open("C:\\Users\\rboni\\OneDrive\\Desktop\\scores.txt");

    while (fin.is_open() && !fin.eof())
    {
        fin >> arr[r].name >> arr[r].score;
        r++;
    }

    fin.close();

    //Inputting a specific name and randomized score as the 10 item in the array.
    cout << "You got a hi-score!\nPlease enter a your name: ";
    cin >> arr[10].name;
    arr[10].score = rand() % (101 - 0) + 0;

    //Bubble sorting the array based on scores.
    for (int i = 0; i < ARRAYSIZE(arr) - 1; i++)
    {
        for (int j = 0; j < ARRAYSIZE(arr) - 1; j++)
        {
            if (arr[j].score < arr[j + 1].score)
            {
                swap(arr[j].score, arr[j + 1].score);
                swap(arr[j].name, arr[j + 1].name);
            }
        }
    }

    //Outputting all 11 elements of the array to the screen.
    for (int i = 0; i < ARRAYSIZE(arr); i++)
    {
        cout << arr[i].name + " " + to_string(arr[i].score) + " " + "\n";
    }

    //Writing the array to the saved file, not writing the last element in the array.
    ofstream fout;
    fout.open("C:\\Users\\rboni\\OneDrive\\Desktop\\scores.txt");

    for (int i = 0; i < ARRAYSIZE(arr) - 1; i++)
    {
        fout << arr[i].name + " " + to_string(arr[i].score) + " " + "\n";
        ;
    }

    fout.close();

    system("pause");
}