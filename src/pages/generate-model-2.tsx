import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Title } from "../styles";
import Header from "../components/header";
import { Routes } from "../router";
import BackHelpNext from "../components/back-help-next";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const HorizontalLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CodeDiv = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 50%;
  height: 500px;
  background-color: var(--div1Blue);
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const Block = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: var(--div2Blue);
  border-radius: 8px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  user-select: "none";
  text-align: left;
`;

const ColumnTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 1.5em;
`;

const itemsList = [
  { id: "item1", content: "first item" },
  { id: "item2", content: "second item" },
];

const columnsList = {
  [123]: { name: "Algorithm", items: [] },
  [345]: { name: "Code Blocks", items: itemsList },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function GenerateModel2() {
  const [columns, setColumns] = useState(columnsList);
  return (
    <Layout>
      <Header />
      <Title>Let's Generate the Model!</Title>
      <HorizontalLayout>
        <DragDropContext
          onDragEnd={(result: DropResult) =>
            onDragEnd(result, columns, setColumns)
          }
        >
          {Object.entries(columns).map(([id, column]) => {
            return (
              <Droppable droppableId={id} key={id}>
                {(provided, snapshot) => {
                  return (
                    <CodeDiv
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightgrey"
                          : "#78B6FA",
                      }}
                    >
                      <ColumnTitle>{column.name}</ColumnTitle>
                      {column.items.map((item: any, index: any) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <Block
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    backgroundColor: snapshot.isDragging
                                      ? "#263B4A"
                                      : "#456C86",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {item.content}
                                </Block>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </CodeDiv>
                  );
                }}
              </Droppable>
            );
          })}
        </DragDropContext>
      </HorizontalLayout>
      <BackHelpNext
        previousRoute={Routes.generateModel1}
        helpRoute={Routes.home}
        nextRoute={Routes.trainModel}
      />
    </Layout>
  );
}

export default GenerateModel2;
