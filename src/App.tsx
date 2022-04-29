import React, { useEffect, useState } from "react";
import { Layout, Pagination } from 'antd';
import './App.css';
import CharacterGridView from './components/CharacterGridView';
import { Character } from "./models/models";
import ActivityLoader from "./components/ActivityLoader";

const { Header, Footer, Content } = Layout;

const App:React.FC = () => {

  const [appData, setAppData] = useState<Character[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    
    const url = 'https://rickandmortyapi.com/graphql';
    const params = {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            query: `
              query getCharacters {
                  characters(page:${pageNo}) {
                      results {
                          id
                          name
                          image
                      }
                  }
              }
              `
        })
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url, params);
            const json = await response.json();
            setAppData(json.data.characters.results);
            setIsLoading(false);
        } 
        catch (error) {
            console.log("error", error);
        }
    }
    fetchData();
  }, [pageNo]);

  const onChangePageNo = (page:number) => {
    setPageNo(page);
  }

  return (
      <div className="App">
        
        <Layout>

          <Header>
            <h1 className='center-align title'>Rick and Morty Characters</h1>
          </Header>

          <Layout>
            <p className='center-align label'>Switch to page numbers to view more characters.. :)</p>
            <Pagination className='center-align' onChange={onChangePageNo} defaultCurrent={1} defaultPageSize={20} total={840} showSizeChanger={false}/>
          </Layout>
            
          <Content>
              { isLoading && <ActivityLoader/> }
              { !isLoading && <CharacterGridView appData={appData}/> }
          </Content>
         
          <Footer className='center-align'>developed by <a href="https://krishobh.github.io/" target="_blank">krishobh</a></Footer>

        </Layout>
          
      </div>
  );
}

export default App;

