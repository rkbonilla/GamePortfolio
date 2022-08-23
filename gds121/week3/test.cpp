#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <string>

using namespace std;

//Setting variables.
int const NUM_OF_PLAYERS = 5;
string playerName[NUM_OF_PLAYERS];
int playerHealth[NUM_OF_PLAYERS] = {100, 100, 100, 100, 100};
int playerStrength[NUM_OF_PLAYERS];
int playerArmor[NUM_OF_PLAYERS];
int playerStamina[NUM_OF_PLAYERS];

//Random function for generating stats.
int random(int _low, int _high)
{
    return rand() % ((_high + 1) - _low) + _low;
}

bool IsThereAWinner()
{
    int aboveZeroHealth = 0;
    int winnerIndex = 0;

    for (int i = 0; i < NUM_OF_PLAYERS; i++)
    {
        if (playerHealth[i] > 0)
        {
            aboveZeroHealth++;
            winnerIndex = i;
        }
    }

    if (aboveZeroHealth == 1)
    {
        cout << endl;

        cout << playerName[winnerIndex] << " is the winner!" << endl;

        return true;
    }
    else
    {
        return false;
    }
}

int main()
{
    srand(time(NULL));

    //Generating stats.
    for (int i = 0; i < NUM_OF_PLAYERS; i++)
    {
        cout << "Who is Player " << i + 1 << ": ";
        cin >> playerName[i];
        playerStrength[i] = random(20, 100);
        playerArmor[i] = random(1, 25);
        playerStamina[i] = random(1, 5);
    }

    cout << endl;

    bool gameOn = true;

    do
    {
        int attacker = 0 + (rand() % 5);
        int defender = 0 + (rand() % 5);
        int watch1 = 0 + (rand() % 5);
        int watch2 = 0 + (rand() % 5);
        int watch3 = 0 + (rand() % 5);

        //Way too many if statements to make sure each variable gets a different number.
        if (watch1 == watch2)
        {
            continue;
        }

        if (watch2 == watch3)
        {
            continue;
        }

        if (watch3 == watch1)
        {
            continue;
        }

        if (watch1 == attacker)
        {
            continue;
        }

        if (watch2 == attacker)
        {
            continue;
        }

        if (watch3 == attacker)
        {
            continue;
        }

        if (watch1 == defender)
        {
            continue;
        }

        if (watch2 == defender)
        {
            continue;
        }

        if (watch3 == defender)
        {
            continue;
        }

        if (attacker == defender)
        {
            continue;
        }

        if (playerHealth[defender] <= 0)
        {
            continue;
        }

        if (playerHealth[attacker] <= 0)
        {
            continue;
        }

        cout << endl;
        cout << playerName[attacker] << " strikes " << playerName[defender] << "!" << endl
             << endl;

        //Subtracting defender's armor from attacker's strength, and then subtracting the result from defender's health.
        playerHealth[defender] = playerHealth[defender] - (playerStrength[attacker] - playerArmor[defender]);

        //Health values unable to go past 0.
        if (playerHealth[defender] < 0)
        {
            playerHealth[defender] = 0;
        }

        //Player's that are inactive for the round heal based on their stamina only if their health is lower than 100 AND greater than 0, also prevents players from healing over 100 health.
        if (playerHealth[watch1] < 100 && playerHealth[watch1] > 0)
        {
            playerHealth[watch1] = playerHealth[watch1] + playerStamina[watch1];

            if (playerHealth[watch1] > 100)
            {
                playerHealth[watch1] = 100;
            }
        }

        if (playerHealth[watch2] < 100 && playerHealth[watch2] > 0)
        {
            playerHealth[watch2] = playerHealth[watch2] + playerStamina[watch2];

            if (playerHealth[watch2] > 100)
            {
                playerHealth[watch2] = 100;
            }
        }

        if (playerHealth[watch3] < 100 && playerHealth[watch3] > 0)
        {
            playerHealth[watch3] = playerHealth[watch3] + playerStamina[watch3];

            if (playerHealth[watch3] > 100)
            {
                playerHealth[watch3] = 100;
            }
        }

        //Displaying stats.
        for (int i = 0; i < NUM_OF_PLAYERS; i++)
        {
            cout << playerName[i] << " has " << playerStrength[i] << " strength, " << playerArmor[i] << " armor, " << playerStamina[i] << " stamina, and " << playerHealth[i] << " health." << endl;
        }

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