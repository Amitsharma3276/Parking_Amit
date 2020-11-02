import React from "react";
import VehicleTable from "../core/VehicleTable";
import CreateVehicleFormDialog from "../core/components/CreateVehicleFormDialog";
export default function VehicleModule(props) {
  return (
    <div>
      <h2>This is VehicleModule</h2>
      <VehicleTable />
      <CreateVehicleFormDialog/>
    </div>
  );
}
