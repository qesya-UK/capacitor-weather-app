import { Block, Toolbar, Icon, Sheet, Button } from "framework7-react";

import './style.scss';
import { useEffect, useState } from "react";

type SearchBarProps = {
  onSearch: (text: string) => void;
  onSheetClosed: () => void;
};

const SearchBar = (props: SearchBarProps) => {

  const { onSearch, onSheetClosed } = props;

  const [searchText, setSearchText] = useState('');
  const [sheetIsOpen, setSheetIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setSheetIsOpen(true);
    }, 400);
  }, [])

  const callSearchHandler = () => {
    // if (searchText.length > 0) {
      onSearch(searchText);
      setSearchText('');
      setSheetIsOpen((prev) => !prev);
    // }
  }

  const handleOnEnter = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      callSearchHandler();
    }
  };

  return (
    <Sheet
      className="weather-sheet"
      style={{ height: '200px' }}
      push
      backdrop
      swipeToClose={false}
      opened={sheetIsOpen}
      closeByBackdropClick={false}
      onSheetClosed={() => {
        onSheetClosed();
      }}
    >
      <Block className="search-block" strong inset>
        <input className="search-input" placeholder="Enter location"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleOnEnter}
        />
        <Button className="search-button"
          onClick={callSearchHandler}
        >
          <Icon f7="search" />
        </Button>
      </Block>
      <Button
        fill
        onClick={callSearchHandler}
        className="btn-search"
      >
        Search
      </Button>
    </Sheet>
  )
};

export default SearchBar;