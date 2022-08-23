#include <iostream>
#include <windows.h>
#include <time.h>
#include <string>
using namespace std;

string name()
{
    string vowels = "aeiou";
    string first[5] = {"th", "ch", "sh", "qu", "st"};
    string last = "bcdfghjklmnpqrstvwxyz";
    string name = "";

    name = name + first[rand() % 5];
    name = name + vowels[rand() % vowels.length()];
    name = name + last[rand() % last.length()];
    name = name + vowels[rand() % vowels.length()];
    name = name + first[rand() % 5];

    return name;
}

int main()
{
    srand(time(NULL));

    for (int i = 0; i < 100; i++)
    {
        cout << name() << endl;
    }
    return 0;
}