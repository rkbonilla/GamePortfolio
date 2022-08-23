#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <string>

using namespace std;

int const NUM_OF_PLAYERS = 5;
string playerName[NUM_OF_PLAYERS];
int strength[NUM_OF_PLAYERS];
int health[NUM_OF_PLAYERS] = {100, 100, 100, 100, 100};

bool IsThereAWinner()
{
    int aboveZeroHealth = 0;
    int winnerIndex = 0;

    for (int i = 0; i < NUM_OF_PLAYERS; i++)
    {
        if (health[i] > 0)
        {
            aboveZeroHealth++;
            winnerIndex = i;
        }
    }

    if (aboveZeroHealth == 1)
    {
        cout << "And the winner is " << playerName[winnerIndex] << endl;
        return true;
    }
    else
    {
        return false;
    }
}

void displayStats()
{
    for (int i = 0; i < NUM_OF_PLAYERS; i++)
    {
        cout << "Player" << i << " name = " << playerName[i] << " Strength = " << strength[i] << " Health = " << health[i] << endl;
    }
}

int main()
{
    srand(time(NULL));

    for (int i = 0; i < NUM_OF_PLAYERS; i++)
    {

        cout << "Type name of player " << i << ": ";
        cin >> playerName[i];
        strength[i] = 25 + (rand() % 26);
    }

    bool gameOn = true;

    do
    {
        int attacker = 0 + (rand() % NUM_OF_PLAYERS);
        int defender = 0 + (rand() % NUM_OF_PLAYERS);

        if (attacker == defender)
        {
            continue;
        }

        if (health[defender] <= 0)
        {
            continue;
        }

        if (health[attacker] <= 0)
        {
            continue;
        }

        cout << endl
             << "Player " << attacker << " strikes player " << defender << endl;
        health[defender] = health[defender] = strength[attacker];

        displayStats();

        if (IsThereAWinner())
        {
            gameOn = false;
        }
        else
        {
            cout << endl;
            cout << "-----------------------------------" << endl;
            system("pause");
        }
    } while (gameOn);

    system("pause");
    return 0;
}