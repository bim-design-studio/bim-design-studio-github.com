import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="bg-slate-200 text-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-10 text-left">
        <h1 className="font-bold text-slate-700 text-2xl p-5 text-center">
          Terms and Conditions
        </h1>
        <p className="text-slate-400 italic text-center">
          Last Updated: 1st May 2026
        </p>
        <h2 className="text-slate-700 text-xl text-left mt-5">
          Confirmation of Training
        </h2>
        <p className="text-slate-500 my-2 text-justify">
          <li>
            The training is confirmed for those who have registered one week prior to the scheduled training date. Registrations made within one week of the training date may not be guaranteed and are subject to availability.
          </li>
          <li>
            To reserve a seat for the training, participants are required to make an advance payment of 25% of the toral training fee.
          </li>
          <li>
            For the training to take place, a minimum of 5 participants must be registered. If the minimum number of participants is not met, the training may be rescheduled or canceled, and registered participants will be notified accordingly.
          </li>
          <li>
            The registration process is considered complete only after the advance payment is received and confirmed by BIM Design Studio. Participants will receive a confirmation email with details of the training session, including the date, time, location, and any necessary materials or instructions.
          </li>
        </p>

        <h2 className="text-slate-700 text-xl text-left mt-5">
          Payment Cancellation, Rescheduling, and Refun Policy
        </h2>
        <p className="text-slate-500 my-2 text-justify">
          <li>
            If a participant wishes to cancel their registration, they must notify BIM Design Studio in writing within the specified period prior to the scheduled training date to be eligible for a refund of the advance payment. Participants who cancel after the specified period will not be eligible for a refund.
          </li>
          <li>
            Any cancallations must be notified no later than 7 days before the scheduled training date. Cancellations made after this period will not be eligible for a refund.
          </li>
          <li>
            If no cancellation is made and the participant fails to attend the training, 25% of the total training fee will be charged.
          </li>
          <li>
            If a participant wishes to reschedule their training session, they must contact BIM Design Studio at least 7 days prior to the scheduled training date. Rescheduling requests are subject to availability and may incur additional fees.
          </li>
        </p>

        <h2 className="text-slate-700 text-xl text-left mt-5">
          Training Structure
        </h2>
        <p className="text-slate-500 my-2 text-justify">
          <li>
            Upon successful completion of the training, participants will receive a certificate of completion from BIM Design Studio. The certificate will include the participant's name, the name of the training program, the date of completion, and any relevant accreditation or recognition.
          </li>
        </p>

        <h2 className="text-slate-700 text-xl text-left mt-5">
          Termination of Training Program
        </h2>
        <p className="text-slate-500 my-2 text-justify">
          <li>
            BIM Design Studio offers a 100% refund of the advance payment if the training program is terminated by BIM Design Studio for any reason, including but not limited to insufficient enrollment, unforeseen circumstances, or changes in scheduling. In such cases, registered participants will be notified promptly, and the refund process will be initiated without delay.
          </li>
        </p>
      </div>
    </div>
  );
}