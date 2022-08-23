//Binary searches in C++.

#include <iostream>
#include <string>
#include <time.h>
#include <Windows.h>

using namespace std;

string makeName()
{
    string parts[10] = {"ti", "lee", "bop", "kar", "tom", "bo", "ram", "jet", "er", "uck"};
    return parts[rand() % 10] + parts[rand() % 10] + parts[rand() % 10];
}

int main(void)
{
    srand(time(NULL));
    string names[100];

    for (int i = 0; i < 100; i++)
    {
        names[i] = makeName();
        names[i][0] = toupper(names[i][0]);
    }

    string search_name = "Owen";
    names[rand() % 100] = search_name;

    for (int i = 0; i < ARRAYSIZE(names) - 1; i++)
    {
        for (int j = 0; j < ARRAYSIZE(names) - 1; j++)
        {
            if (names[j] > names[j + 1])
            {
                string temp = names[j];
                names[j] = names[j + 1];
                names[j + 1] = temp;
            }
        }
    }

    for (int i = 0; i < 100; i++)
    {
        cout << to_string(i) + ". " + names[i] + "\n";
    }

    int min = 0;
    int max = ARRAYSIZE(names) - 1;
    int guess = (min + max) / 2;
    int iterations = 0;

    while (min < max && names[guess] != search_name)
    {
        if (search_name < names[guess])
        {
            max = guess - 1;
        }

        if (search_name > names[guess])
        {
            min = guess + 1;
        }

        guess = (min + max) / 2;
        iterations++;
    }

    cout << "It took " + to_string(iterations) + " guesses to find " + search_name + ".\n" + search_name + " is located at index: " + to_string(guess) + ".\n";

    system("pause");
    return 0;
}