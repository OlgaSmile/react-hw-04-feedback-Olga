import Buttons from '../Buttons/Buttons';
import NotificationMsg from '../NotificationMsg/NotificationMsg';
import SectionTitle from '../SectionTitle/SectionTitle';
import Statistic from '../Statistic/Statistic';
import StatisticFunctions from '../StatisticFunctions/StatisticFunctions';

export default function Feedback({
  state,
  onButtonClick,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <Buttons state={state} onButtonClick={onButtonClick} />
      </SectionTitle>
      {countTotalFeedback() === 0 ? (
        <NotificationMsg />
      ) : (
        <SectionTitle title="Statistic">
          <Statistic state={state} />
          <StatisticFunctions
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </SectionTitle>
      )}
    </div>
  );
}