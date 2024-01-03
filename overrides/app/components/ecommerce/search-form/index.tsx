import React, {useEffect, useState, useRef, useMemo} from 'react'
import debounce from 'lodash/debounce'

// Components
import {Flex} from '@chakra-ui/react'
import InputText from '../../project/fields/input.text'
import MiniSeachResults from '../mini-search-results'

// Hooks
import {useSearchSuggestions} from '@salesforce/commerce-sdk-react'

// Others
import {RECENT_SEARCH_MIN_LENGTH} from '../../../constants'
import {formatSuggestions} from '../../../../core/utils/search-utils'

const SearchForm: React.FC = () => {
    // Hooks
    const [searchQuery, setSearchQuery] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    // 3. When the searchQuery is changed we will have a new call
    const searchSuggestion = useSearchSuggestions(
        {
            parameters: {
                q: searchQuery
            }
        },
        {
            enabled: searchQuery?.length >= RECENT_SEARCH_MIN_LENGTH
        }
    )

    // 4. When the new surch suggestions are ready, filter is applied and the result is cached
    const searchSuggestions = useMemo(
        () => formatSuggestions(searchSuggestion.data, inputRef?.current?.value),
        [searchSuggestion]
    )

    // 2. Debounce
    // Wait before to make a call. We don't need to have a call on each latter
    const debouncedSearch = debounce((input) => {
        // Cancel previouse request
        debouncedSearch.cancel()

        // Set the new input value
        setSearchQuery(input)
    }, 300)

    // 1. Handler
    const onSearchChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const input = target.value

        if (input.length >= RECENT_SEARCH_MIN_LENGTH) {
            debouncedSearch(input)
        } else {
            setSearchQuery('')
        }
    }

    useEffect(() => {
        console.log(searchSuggestions)
    }, [searchSuggestions])

    return (
        <Flex>
            <InputText
                ref={inputRef}
                type="text"
                id="searcg"
                placeholder="Search..."
                onChange={onSearchChange}
            />

            <MiniSeachResults searchresult={searchSuggestions} />
        </Flex>
    )
}

export default SearchForm
