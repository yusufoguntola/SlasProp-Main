export function getInitials(firstName: string, lastName?: string) {
  return lastName
    ? `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`
    : `${firstName.substring(0, 2)}`;
}
