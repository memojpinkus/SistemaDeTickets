import TicketCard from "./components/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className=" sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
