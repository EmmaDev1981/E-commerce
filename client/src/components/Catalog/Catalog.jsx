import React, { useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Categorias from '../Categorias/Categorias'
import GridList from '../GridListProducts/GridListProducts'
import Grid from '@material-ui/core/Grid'
import { getProducts, getProductsBySearch, getProductsByCategory } from "../../actions";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function () {
	const { id } = useParams()
	let query = useQuery().get('search');
	const products = useSelector(state => state.products)
	const dispatch = useDispatch()
	useEffect(() => {
		if (id) {
			dispatch(getProductsByCategory(id))
		}
		else if (query) {
			dispatch(getProductsBySearch(query))
		}
		else if (query === null) {
			dispatch(getProducts())
		}
	}, [query, id])
	
	return (
		<div className = 'grid_container'>
			<Grid container direction='row' spacing={4}>
				<Grid item xs={12} sm={3} md={3}>
					<Categorias />
				</Grid>
				<Grid item xs={12} sm={9} md={9}>
					{
						products.length === 0
							? <h2>No existen productos</h2>
							: <GridList productos={products} />
					}
				</Grid>
			</Grid>
		</div>
	)
}
