const superbowlWin = (record) => {
const winningRecord = record.find(isWin);
if (winningRecord) {
    return winningRecord.year;
    }    
};

const isWin = (element) => {
return element.result === 'W';
};

superbowlWin(record);