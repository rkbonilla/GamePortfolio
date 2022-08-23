#include <iostream>
#include <time.h>
#include <stdlib.h>
#include <string>
#include <windows.h>

using namespace std;

//Random number generator
int random(int _low, int _high)
{
    return (rand() % ((_high + 1) - _low)) + _low;
}

string formattedText(string _header, string _message)
{
    string msg = "----------" + _header + "----------" + "\n" +
                 _message + "\n" +
                 "---------------------------------";

    return msg;
}

//Display One Fighter
string displayFighter(int _i, string _name[], int _strength[], int _health[])
{
    return _name[_i] + "\t strength:" + to_string(_strength[_i]) + "\t health:" + to_string(_health[_i]);
}

//Display All Fighters
void displayAllFighters(int _numOfPlayers, string _name[], int _strength[], int _health[])
{
    cout << "--------------FIGHTERS---------------" << endl;
    for (int i = 0; i < _numOfPlayers; i++)
    {
        cout << displayFighter(i, _name, _strength, _health) << endl;
    }
    cout << "-------------------------------------" << endl;
    cout << endl;
}

int main(void)
{

    srand(time(NULL));

    //Initialize vars
    int const numOfPlayers = 5;
    string names[numOfPlayers];
    int strength[numOfPlayers];
    int health[numOfPlayers];
    int round = 1;
    bool gameOn = true;
    string ok = "n";

    //Name Fighters
    do
    {
        system("CLS");

        cout << "Name your players." << endl;

        for (int i = 0; i < numOfPlayers; i++)
        {
            cin >> names[i];
            strength[i] = random(1, 100);
            health[i] = 100;
        }

        displayAllFighters(numOfPlayers, names, strength, health);

        cout << "Do you like these fighters? (y/n)";
        cin >> ok;

    } while (ok != "y");

    system("PAUSE");

    //Run Simulation
    do
    {

        //Select Fighters
        int attacker = random(0, 4);
        int defender = random(0, 4);

        //Check for eligibility
        if (defender == attacker)
        {
            continue;
        }

        if (health[attacker] <= 0 || health[defender] <= 0)
        {
            continue;
        }

        //Deal damage
        health[defender] = health[defender] - strength[attacker];

        //Set message
        string message;
        if (health[defender] <= 0)
            message = "DEFEATS";
        else
            message = "strikes";

        //Display round and results

        cout << "---------------ROUND " << round << "-----------------" << endl;
        cout << names[attacker] << " " << message << " " << names[defender] << " with " << strength[attacker] << endl;
        cout << "-------------------------------------" << endl;
        cout << endl;

        cout << formattedText("RESULTS", displayFighter(attacker, names, strength, health) + "\n" + displayFighter(defender, names, strength, health)) << endl
             << endl;

        //Check for winner
        int leftStanding = 0;
        int winner;
        for (int i = 0; i < numOfPlayers; i++)
        {
            if (health[i] > 0)
            {
                leftStanding++;
                winner = i;
            }
        }

        //Display remaining fighters
        cout << formattedText("LEFT STANDING", "\t\t" + to_string(leftStanding)) << endl;

        displayAllFighters(numOfPlayers, names, strength, health);

        //Win condition
        if (leftStanding == 1)
        {
            cout << formattedText("WINNER", displayFighter(winner, names, strength, health));
            cout << endl
                 << endl;
            gameOn = false;
        }

        //Increment round
        round++;
        system("PAUSE");
    } while (gameOn);

    system("PAUSE");
    return 0;
}