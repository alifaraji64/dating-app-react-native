import { countries } from "countries-list";
import { Item } from "react-native-picker-select";

export const genderSelectItems: Item[] = [{ label: 'male', value: 'male' }
    , { label: 'female', value: 'female', key: 'female' }
    , { label: 'both', value: 'both', key: 'both' }
]
export const interestedInSelectItems: Item[] = [{ label: 'male', value: 'male' }
    , { label: 'female', value: 'female' }
    , { label: 'both', value: 'both' }
]
export let birthYearSelectItems: Item[] = [];
export let countrySelectItems: Item[] = [];
export const goalSelectItems: Item[] = [{ label: 'casual', value: 'casual' }, { label: 'long-term', value: 'long-term' }]
Object.entries(countries).forEach(country => {
    countrySelectItems.push({ label: country[1].name, value: country[1].name })
})
for (let i = 1950; i <= 2007; i++) {
    birthYearSelectItems.push({ label: i.toString(), value: i })
}