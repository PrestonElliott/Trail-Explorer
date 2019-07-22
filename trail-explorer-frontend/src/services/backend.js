const API = "https://www.hikingproject.com/data/get-trails?lat=33.7490&lon=-84.3880&sort=quality&maxResults=100&key=200524977-84faacbb836e7961310518eab8e364d5"

export function getTrails() {
  return fetch(API).then(res => res.json())
}

export function fetchedTrails(data) {
    return {type: "GET_TRAILS", data}
}