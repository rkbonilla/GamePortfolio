#include <iostream>
#include <time.h>
#include <string>
#include <windows.h>
using namespace std;

void swap(int &_a, int &_b)
{
    int temp = _a;
    _a = _b;
    _b = temp;
}

//Plays the opening dialogue and instrutions
void playDialogue(int pace)
{
    cout << "C3PO on Tattooine..." << endl;
    Sleep(pace);
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0e);
    cout << "\tOh Dear. It seems my language search algorithm has been damaged." << endl;
    Sleep(pace);
    cout << "\tMy backup protocols have initiated and I am only able to search my databases sequentially." << endl;
    Sleep(pace);
    cout << "\tIt is taking far too long to access my Tatooine Hutteese Dialect sub-routines." << endl;
    cout << "\tI fear we are all in great danger!" << endl;
    Sleep(pace);
    cout << "\tR2, Can you help repair my bubble sort and binary search algorithms?" << endl;
    Sleep(pace);
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0b);
    cout << "...Beep Beep Boop Woooo..." << endl;
    Sleep(pace);
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0e);
    cout << "\tThis is hardly the time to fuss, R2." << endl;
    cout << "\tIts all outlined in my code base. Just follow the commented steps." << endl;
    Sleep(pace);
    cout << "\tPlease hurry!!" << endl;
    Sleep(pace);
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0f);
    cout << endl;
    cout << "--------------------------------------------------";
    cout << endl;

    system("Pause");
}

int main(void)
{
    srand(time(NULL));

    //Seed strings for routine names array
    string location[4] = {"Tatooine", "Endor", "Kashyyyk", "Bespin"};
    string use[3] = {"trade", "proper", "common"};
    string lang[5] = {"Droid Speak", "Ewokese", "Huttese", "Jawa", "Shyriiwook"};
    string type[2] = {"language", "dialect"};
    string directive[4] = {"sub-routines", "algorithms", "protocols", "library"};

    //The array of routine names
    string routines[100];

    //The name of routine to search
    string searchName = "Tatooine Hutteese dialect sub-routines";

    //-------------------------------NOTE----------------------------------------------------------
    //--------Change this  or comment out to speed up or skip instructions.------------------------
    int paceOfText = 750;
    playDialogue(paceOfText);
    //----------------------------------------------------------------------------------------------

    //Prepares routines array

    for (int i = 0; i < ARRAYSIZE(routines); i++)
    {
        if (rand() % 2 == 0)
        {
            routines[i] += location[rand() % ARRAYSIZE(location)] + " ";
        }
        routines[i] += lang[rand() % ARRAYSIZE(lang)] + " ";
        if (rand() % 2 == 0)
        {
            routines[i] += use[rand() % ARRAYSIZE(use)] + " ";
        }
        routines[i] += type[rand() % ARRAYSIZE(type)] + " " + directive[rand() % ARRAYSIZE(directive)];
    }

    //Inserts Tatooine Hutteese dialect sub-routines.
    routines[rand() % ARRAYSIZE(routines)] = "Tatooine Hutteese dialect sub-routines";

    //-------------------------------STEP 1---------------------------------------------------------------
    //--------------------Bubble sort the array in ascending order----------------------------------------

    for (int i = 0; i < ARRAYSIZE(routines) - 1; i++)
    {
        for (int j = 0; j < ARRAYSIZE(routines) - 1; j++)
        {
            if (routines[j] > routines[j + 1])
            {
                swap(routines[j], routines[j + 1]);
            }
        }
    }

    //----------------------------------------------------------------------------------------------------

    //Numbers and display items
    cout << endl;
    cout << "--------------------------------------------------";
    cout << endl;
    for (int i = 0; i < ARRAYSIZE(routines); i++)
    {
        cout << i << ". " << routines[i] << endl;
    }
    cout << endl;
    cout << "--------------------------------------------------";
    cout << endl;

    /*//Sequentially Searches
	int min = 0;
	int max = ARRAYSIZE(routines);
	int guess = 0;
	int iterations = 0;
	
	for (int i=min; i<max; i++)
	{
		if(routines[i] == searchName)
		{
			guess = i;
			iterations = guess;
			break;
		}
	}

	//Displays Sequential Search Results
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0e);
	cout << "located at index " << guess << endl;
	cout << "Index located in " << iterations << " cycles." << endl;
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0f);
	cout << "--------------------------------------------------";
	cout << endl;*/

    // -------------------------------STEP 2------------------------------------------
    //------------------------Use Binary Search to find the routine-------------------

    //reset min, max, guess and iterations
    int min = 0;
    int max = ARRAYSIZE(routines);
    int guess = 0;
    int iterations = 0;

    //perform binary search
    while (min < max && searchName != routines[guess])
    {

        if (searchName < routines[guess])
        {
            max = guess - 1;
        }

        else if (searchName > routines[guess])
        {
            min = guess + 1;
        }

        guess = (min + max) / 2;
        iterations++;
    }

    //------------------DO NOT DELETE---------------------------------------------
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0e);
    //------------------DO NOT DELETE---------------------------------------------

    /*
	Display results as:
		"located at index <guess>.
		"Index located in <iterations> cycles."
	*/

    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0e);
    cout << "located at index " << guess << endl;
    cout << "Index located in " << iterations << " cycles." << endl;
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0f);
    cout << "--------------------------------------------------";
    cout << endl;

    //-------------------------------------------------------------------------------
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 0x0f);
    cout << "--------------------------------------------------";
    cout << endl;

    system("Pause");
    return 0;
}