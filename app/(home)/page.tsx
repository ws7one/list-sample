"use client";

import Col from "@/components/layout/Col";
import Main from "@/components/layout/Main";
import { usePeople } from "@/hooks/usePeople";
import Loading from "@/components/Loading";
import Table from "@/components/table/Table";
import TableRow from "@/components/table/TableRow";
import TableHeaderTitle from "@/components/table/TableHeaderTitle";
import Header from "@/components/layout/Header";

export default function Home() {
  const { data = [], isLoading } = usePeople();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Main>
      <Header className="mb-8">
        <h1 className="text-3xl font-bold">Attendees</h1>
      </Header>
      <Col className="flex items-center h-screen">
        <Table className={"w-full"}>
          <TableRow hovered={false} isHeader>
            <TableHeaderTitle className="basis-4/12 cursor-pointer">
              Name
            </TableHeaderTitle>
            <TableHeaderTitle className="basis-4/12 cursor-pointer">
              Age
            </TableHeaderTitle>
            <TableHeaderTitle className="basis-4/12 cursor-pointer">
              DOB
            </TableHeaderTitle>
          </TableRow>
          {data.map((person) => (
            <TableRow key={person.id}>
              <TableHeaderTitle className="basis-4/12">
                {person.name}
              </TableHeaderTitle>
              <TableHeaderTitle className="basis-4/12">
                {person.age}
              </TableHeaderTitle>
              <TableHeaderTitle className="basis-4/12">
                {person.date_of_birth}
              </TableHeaderTitle>
            </TableRow>
          ))}
        </Table>
      </Col>
    </Main>
  );
}
