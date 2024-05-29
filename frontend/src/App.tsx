import './App.css'
import KanBanBoard from "./components/KanBanBoard.tsx";
import KanBanCard from "./components/KanBanCard.tsx";
import KanBanItem from "./components/KanBanItem.tsx";

function App() {

  return (
      <KanBanBoard>
          <KanBanCard KanBanCardProps={{type: "ToDo"}}>
              <KanBanItem kanBanItemProps={{id: "1", description: "Das ist ein Test.", status: "OPEN"}}/>
          </KanBanCard>
          <KanBanCard KanBanCardProps={{type: "Doing"}}>
              <KanBanItem kanBanItemProps={{id: "1", description: "Das ist ein Test.", status: "IN_PROGRESS"}}/>
          </KanBanCard>
          <KanBanCard KanBanCardProps={{type: "Done"}}>
              <KanBanItem kanBanItemProps={{id: "1", description: "Das ist ein Test.", status: "DONE"}}/>
          </KanBanCard>
      </KanBanBoard>
  )
}

export default App
