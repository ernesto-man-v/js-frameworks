import {Section} from '../Section';
import {Categorie} from '../Categorie';

export const CategoriesSection = (props) => {
    return (
        <Section title='Categories' link={{title: 'All categories', href:'#'}}>
            {
                props.categories.entities.map((categorie) => {
                    return <Categorie key={categorie.id} title={categorie.title} imageSource={categorie.image} categoryId={categorie.id}/>
                })
            }
        </Section>
    )
}