export default async function Resolver(_, { username }) {
  return await fetch(`https://github.com/${username}.png`)
}
