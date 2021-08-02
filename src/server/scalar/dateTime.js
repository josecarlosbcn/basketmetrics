import { GraphQLScalarType } from 'graphql';
import { isISO8601 } from 'validator';

const parseISO8601 = (value) => {
/*   if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string'); */
  let date = new Date(value);
  let day = date.getDate();
  if (day < 10)
      day = "0" + day
  let month = date.getMonth() + 1;
  if (month < 10)
      month = "0" + month;
  let hours = date.getHours();
  if (hours < 10)
      hours = "0" + hours;
  let minutes = date.getMinutes();
  if (minutes < 10)
      minutes = "0" + minutes;
  let d = day + "/" + month + "/" + date.getFullYear() + " " + hours + ":" + minutes;
  return d;
};

const serializeISO8601 = (value) => {
/*   if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string'); */
  let date = new Date(value);
  let day = date.getDate();
  if (day < 10)
      day = "0" + day
  let month = date.getMonth() + 1;
  if (month < 10)
      month = "0" + month;
  let hours = date.getUTCHours();
  if (hours < 10)
      hours = "0" + hours;
  let minutes = date.getMinutes();
  if (minutes < 10)
      minutes = "0" + minutes;
  let d = day + "/" + month + "/" + date.getFullYear() + " " + hours + ":" + minutes;
  return d;
};

const parseLiteralISO8601 = (ast) => {
/*   if (isISO8601(ast.value)) {
    return ast.value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string'); */
  let date = new Date(ast.value);
  let day = date.getDate();
  if (day < 10)
      day = "0" + day
  let month = date.getMonth() + 1;
  if (month < 10)
      month = "0" + month;
  let hours = date.getHours();
  if (hours < 10)
      hours = "0" + hours;
  let minutes = date.getMinutes();
  if (minutes < 10)
      minutes = "0" + minutes;
  let d = day + "/" + month + "/" + date.getFullYear() + " " + hours + ":" + minutes;
  return d;
};

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'An ISO-8601 encoded UTC date string.',
  serialize: serializeISO8601,
  parseValue: parseISO8601,
  parseLiteral: parseLiteralISO8601
});

//export { DateTime as default };
module.exports.DateTime = DateTime;