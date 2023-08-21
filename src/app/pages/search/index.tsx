import { Page, PageContent } from "framework7-react";
import SearchBar from "../../components/SearchBar";
import { getSafeAreaClass } from "../../utils/f7utils";
import './style.scss';
import useSearchLogic from "./useSearchLogic";

type SearchPageProps = {
  f7route: any;
  f7router: any;
};

const SearchPage = (props: SearchPageProps) => {
  const { f7router } = props;
  const { handleSearch } = useSearchLogic(f7router);
  const onSheetClosed = () => { }

  return (
    <Page name="search" className={getSafeAreaClass()}>
      <PageContent>
      </PageContent>
      <SearchBar
        onSearch={handleSearch}
        onSheetClosed={onSheetClosed}
      />
    </Page>
  );
};


export default SearchPage;