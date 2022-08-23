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

class GameObject
{
public:
    int x = rand() % (100 - 5) + 5;
    int y = rand() % (100 - 5) + 5;
    int w = rand() % (100 - 5) + 5;
    int h = rand() % (100 - 5) + 5;
    int force = rand() % (100 - 5) + 5;

    string display()
    {
        return "x: " + to_string(x) + "\t" +
               "y: " + to_string(y) + "\t" +
               "w: " + to_string(w) + "\t" +
               "h: " + to_string(h) + "\t" +
               "force: " + to_string(force) + "\n";
    }
};

void sort(GameObject arr[], int _length, string _a)
{
    for (int i = 0; i < _length; i++)
    {
        for (int j = 0; j < _length; j++)
        {
            if (_a == "d")
            {
                if (arr[j].y < arr[j + 1].y)
                {

                    swap(arr[j], arr[j + 1]);
                }
            }
            else if (_a == "a")
            {
                if (arr[j].y > arr[j + 1].y)
                {
                    swap(arr[j], arr[j + 1]);
                }
            }
        }
    }
}

void main()
{
    srand(time(NULL));

    GameObject arr[5];

    for (int i = 0; i < 5; i++)
    {
        cout << arr[i].display();
    }

    sort(arr, ARRAYSIZE(arr), "a");

    cout << "--------------------------------------\n";
    for (int i = 0; i < 5; i++)
    {
        cout << arr[i].display();
    }

    system("pause");
}