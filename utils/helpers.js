module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    // format time as HH:MM:SS
    return date.toLocaleTimeString();
  },
};
