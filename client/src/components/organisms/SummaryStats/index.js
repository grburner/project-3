import React, { useEffect, useState } from 'react';

import SummaryStat from '../../molecules/SummaryStat';
import CardDeck from 'react-bootstrap/CardDeck';
import * as API from '../../../utils/mockAPI';

const SummaryStats = () => {
  const [summaryState, setSummaryState] = useState([]);

  useEffect(() => {
    API.summaryStatsAPI.then((data) => {
      setSummaryState(data);
    });
  }, []);

  let cardsToRender;
  if (summaryState) {
    cardsToRender = summaryState.map((item, key) => ( 
      <SummaryStat 
        key={key}
        title={item.title}
        input={item.data}
      />
    ));
  } else {
    cardsToRender = 'Loading...';
  }

  return (
    <CardDeck>
      {cardsToRender}
    </CardDeck>
  );
};

export default SummaryStats;