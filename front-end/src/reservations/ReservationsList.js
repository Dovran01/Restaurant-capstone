/** @format 
 * 
 * Path: front-end\src\reservations\ReservationsList.js
*/

import React from "react";
import { Link } from "react-router-dom";
import ReservationCancel from "./ReservationCancel";
/**
 * Defines the reservations list.
 * @param reservations
 * the reservations to be displayed in the list
 * @param date	
 * the date to be displayed in the list
 * @returns {JSX.Element}
 */
/** @format 
 * 
 * Path: front-end\src\reservations\ReservationsList.js
*/



const ReservationsList = ({ reservations, date }) => {
	const tableRows = reservations.map((reservation) => (
		<tr key={reservation.reservation_id}>
			<th scope="row">{reservation.reservation_id}</th>
			<td>{reservation.first_name}</td>
			<td>{reservation.last_name}</td>
			<td>{reservation.mobile_number}</td>
			<td>{reservation.reservation_date}</td>
			<td>{reservation.reservation_time}</td>
			<td>{reservation.people}</td>
			<td data-reservation-id-status={reservation.reservation_id}>
				{reservation.status}
			</td>
			<td>
				{reservation.status === "booked" && (
					<Link 
						className="btn btn-success" 
						to={`/reservations/${reservation.reservation_id}/seat`}>
						Seat
					</Link>
				)}
			</td>
			{reservation.status === "booked" || reservation.status === "seated" ? (
				<>
					<td>
						<Link 
							className="btn btn-primary" 
							to={`/reservations/${reservation.reservation_id}/edit`}>
							Edit
						</Link>
					</td>
					<td>
						<ReservationCancel reservation_id={reservation.reservation_id} />
					</td>
				</>
			) : (
				<>
					<td></td>
					<td></td>
				</>
			)}
		</tr>
	));

	if (reservations.length > 0) {
		return (
			<div className="table table-striped table-responsive table-sm">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Mobile Number</th>
							<th scope="col">Date</th>
							<th scope="col">Time</th>
							<th scope="col">Number of people</th>
							<th scope="col">Status</th>
							<th scope="col"></th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</table>
			</div>
		);
	}
	return (
		<div
			className="container alert alert-dark"
			role="alert"
			style={{ minWidth: "100%" }}>
			{" "}
			{`No reservations found for ${date}.`}
		</div>
	);
};

export default ReservationsList;