#include <iostream>
#include <Windows.h>
#include <string>
#include <time.h>

using namespace std;

//Making a function that adds two strings and adds them together to return the result.
string formattedText(string _s1, string _s2)
{
    return _s1 + " " + _s2;
}

//Making a function that combines two integers together.
int divide(int _n1, int _n2)
{
    return _n1 / _n2;
}

//Function that combines an integer and a string.
string funky(int _n1, string _s1)
{
    return to_string(_n1) + _s1;
}

//Swapping variables as a function. & passes by reference instead of value.
void swap(string &_x, string &_y)
{
    string temp = _x;
    _x = _y;
    _y = temp;
}

//Modifying an array with a function. The _loops integer is the size of the array.
void mod(string _array[], int _loops)
{
    for (int i = 0; i < _loops; i++)
    {
        //This will directly modify the array by adding its address to it. 0, 1, 2, 3, 4
        //Adding the +1 to i will increase the number by 1 when adding the address.
        _array[i] = to_string(i + 1) + ". " + _array[i];
    }
}

int main(void)
{
    //Arrays
    string names[5] = {"Zelda", "Link", "Toad", "Luigi", "Peach"};

    //Modifying names.
    mod(names, ARRAYSIZE(names));

    //Bubble sorting.
    for (int i = 0; i = ARRAYSIZE(names) - 1; i++)
    {
        for (int j = 0; j = ARRAYSIZE(names) - 1; j++)
        {
            if (names[j] > names[j + 1])
            {
                //In order to keep parallel arrays together when swaps happen, you just added a swap of that array here as well.
                swap(names[j], names[j + 1]);
            }
        }
    }

    //Printing all the objects in an array.
    for (int i = 0; i = ARRAYSIZE(names); i++)
    {
        cout << names[i] << endl;
    }

    //Swapping variables.
    string me = "Roberto";
    string you = "Kelsey";

    string temp = me;
    me = you;
    you = temp;

    cout << me << endl;

    //Line breaks in strings.
    cout << "Jay\nAguiar\n";

    //Use the formattedText() function.
    cout << formattedText("Jay", "Aguiar") << endl;

    //Storing the formattedText() in a variable and printing.
    string c = formattedText("Jay", "Aguiar");
    cout << c << endl;

    //Using integer math function.
    cout << divide(4, 2);

    //This tells us how many pixels per frame we use.
    int frames = 3;
    int pixels = 6;
    int speed = divide(6, 3);

    //Displaying the funky() function.
    cout << funky(10, "Ben");

    system("pause");
    return 0;
}