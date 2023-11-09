export default function editDateFormat (date) {
    const dateAsObject = new Date(date);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(dateAsObject);
    return formattedDate;
}