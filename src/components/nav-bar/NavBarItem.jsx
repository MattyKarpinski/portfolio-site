const NavBarItem = ({data}) => {

  return (
    <li className={data.cName} onClick={data.close}>
        <a href={data.path} >{data.name}</a>
    </li>
  )
}

export default NavBarItem