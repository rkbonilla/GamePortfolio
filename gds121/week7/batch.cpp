#include <iostream>
#include <string>
#include <fstream>
#include <time.h>
#include <windows.h>

using namespace std;

void swap(int &_a, int &_b)
{
    int temp = _a;
    _a = _b;
    _b = temp;
}

void main()
{
    srand(time(NULL));

    string name[6];
    int score[6];
    int r = 0;

    //Reading from an external file.
    ifstream fin;
    fin.open("C:\\Users\\rboni\\OneDrive\\Desktop\\scores.txt");

    while (fin.is_open() && !fin.eof())
    {
        fin >> name[r] >> score[r];
        r++;
    }

    fin.close();

    //Adding someone to the score list.
    name[5] = "Jake";
    score[5] = 18;

    for (int i = 0; i < ARRAYSIZE(name) - 1; i++)
    {
        for (int j = 0; j < ARRAYSIZE(name) - 1; j++)
        {
            if (score[j] < score[j + 1])
            {
                swap(score[j], score[j + 1]);
                swap(name[j], name[j + 1]);
            }
        }
    }

    for (int i = 0; i < ARRAYSIZE(name); i++)
    {
        cout << name[i] + " " + to_string(score[i]) + " " + "\n";
    }

    //Writing to an external file.
    ofstream fout;
    fout.open("C:\\Users\\rboni\\OneDrive\\Desktop\\scores.txt");

    for (int i = 0; i < ARRAYSIZE(name) - 1; i++)
    {
        fout << name[i] + " " + to_string(score[i]) + " " + "\n";
        ;
    }

    fout.close();

    system("pause");
}