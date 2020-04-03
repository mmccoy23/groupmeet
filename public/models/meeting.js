const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
    meetingName: String,
    maker: User,
    attendees: Array,
    meetingTime: Date

}, { collection: 'meetings' })

const Meeting = mongoose.model('meeting', MeetingSchema);

module.exports = Meeting