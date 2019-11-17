const userTemplate = document.getElementById('user-template').content;

/**
 * Render a user
 *
 * @param {object} user
 * @param {string} user.gender
 * @param {object} user.name
 * @param {string} user.name.title
 * @param {string} user.name.first
 * @param {string} user.name.last
 * @param {object} user.location
 * @param {string} user.location.street
 * @param {string} user.location.city
 * @param {string} user.location.state
 * @param {string} user.location.postcode
 * @param {object} user.location.coordinates
 * @param {string} user.location.coordinates.latitude
 * @param {string} user.location.coordinates.longitude
 * @param {object} user.location.timezone
 * @param {string} user.location.timezone.offset
 * @param {string} user.location.timezone.description
 * @param {string} user.email
 * @param {object} user.login
 * @param {string} user.login.uuid
 * @param {string} user.login.username
 * @param {string} user.login.password
 * @param {string} user.login.salt
 * @param {string} user.login.md5
 * @param {string} user.login.sha1
 * @param {string} user.login.sha256
 * @param {object} user.dob
 * @param {string} user.dob.date
 * @param {number} user.dob.age
 * @param {object} user.registered
 * @param {string} user.registered.date
 * @param {number} user.registered.age
 * @param {string} user.phone
 * @param {string} user.cell
 * @param {object} user.id
 * @param {string} user.id.name
 * @param {string} user.id.value
 * @param {object} user.picture
 * @param {string} user.picture.large
 * @param {string} user.picture.medium
 * @param {string} user.picture.thumbnail
 * @param {string} user.nat
 * @param {string} user.lorem
 */
export function renderUser(user) {
  const template = userTemplate.cloneNode(true);
  const image = template.querySelector('.card__image');
  const title = template.querySelector('.card__title');
  const body = template.querySelector('.card__body');

  image.setAttribute('src', user.picture.thumbnail);
  title.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  body.innerHTML = user.lorem.replace(/\.\s+/g, '.<br />');

  return template;
}
