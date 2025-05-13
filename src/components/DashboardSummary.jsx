import { useEffect, useState } from "react";

function DashboardSummary() {
  const [stats, setStats] = useState({
    participantsWeek: 0,
    totalParticipants: 0,
    activeCases: 0,
    newCases: 0,
    pendingTasks: 0,
    overdueTasks: 0,
    referralsMade: 0,
    referralsFollowUp: 0,
    referralsPending: 0,
    completedTasks: 0,
  });

  useEffect(() => {
    // Simulated fetch or mock summary stats
    const mockStats = {
      participantsWeek: 12,
      totalParticipants: 100,
      activeCases: 75,
      newCases: 10,
      pendingTasks: 20,
      overdueTasks: 5,
      referralsMade: 30,
      referralsFollowUp: 10,
      referralsPending: 7,
      completedTasks: 50,
    };
    setStats(mockStats);
  }, []);

  return (
    <div className="summary">
      <h2>Quick Stats</h2>
      <ul>
        <li>Participants this week: {stats.participantsWeek}</li>
        <li>Total Participants: {stats.totalParticipants}</li>
        <li>Active Cases: {stats.activeCases}</li>
        <li>New Cases: {stats.newCases}</li>
        <li>Pending Tasks: {stats.pendingTasks}</li>
        <li>Overdue Tasks: {stats.overdueTasks}</li>
        <li>Referrals made: {stats.referralsMade}</li>
        <li>Referrals follow-up: {stats.referralsFollowUp}</li>
        <li>Referrals pending: {stats.referralsPending}</li>
        <li>Completed Tasks: {stats.completedTasks}</li>
      </ul>
      <p>
        You are helping make our community stronger and more resilient every
        day. Thank you for your care and commitment.
      </p>
    </div>
  );
}

export default DashboardSummary;
