import {CityType} from "../Lesson02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                }
            }
        }, {
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 200,
                street: {
                    title: "Hogwarts street"
                }
            }
        }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {street: {title: "Central Str"}}
        }, {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {street: {title: "Souths park str"}}
        }
        ],
        citizensNumber: 1000000
    }
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("Souths park str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Hogwarts street");
})

test("create greeting messages for streets", () => {
    const messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Hogwarts street");
});