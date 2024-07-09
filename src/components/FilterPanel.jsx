import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {

  const dispatch = useDispatch()

  const currentFilters = useSelector(selectFilters)

  if(currentFilters == 0) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>

          {currentFilters.map(filter => {
            return <Badge key={filter} variant='clearable' onClear={() => dispatch(removeFilter(filter))}>
              {filter}
            </Badge>
          })}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};