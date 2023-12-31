import ReserveHeader from "./components/ReserveHeader";
import ReserveForm from "./components/ReserveForm";

export const metadata = {
  title: 'Reserve at Red Lobster (Bolingbrook) | OpenTable',
  description: 'Generated by create next app',
}

export default function ReservationPage() {
  return (
    <div className="h-screen border-t">
      <div className="w-3/5 m-auto py-9">
        <ReserveHeader />
        <ReserveForm />
      </div>
    </div>
  )
}