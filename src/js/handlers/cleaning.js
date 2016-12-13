import AWS from 'aws-sdk'
// import Moment from 'moment'
import DeliveryLog from '../models/delivery_log'

// const streamName = `${process.env.STAGE}-todos`;

export const handler = (event, context, callback) => {
  const log = new DeliveryLog(event)
  console.log(event)
  console.log("hoge")
  console.log(log.toString())
  callback(log.toString())
};
