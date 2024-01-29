export const Section = (props) => {
   return <div style={{display: 'flex', flexDirection: 'column', margin: '20px 0 20px 0'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        {
            props.title
            ? <h3>{props.title}</h3>
            : null
        }
        {
            props.link
            ? <a href={`${props.link.href}`}>{props.link.linkTitle}</a>
            : null
        }
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {props.children}
        </div>
    </div>
}