import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
const TitulosF = (props) => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data,e) => {
        console.log(data)
        props.addTitulo(data)
        e.target.reset()
    }
    return ( 
        <Fragment>
            <div className='card bg-dark text-white align-items-center'>
                <div className='card-header'>
                    <h4>Formulario Titulos</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='card-body'>
                        <div className=''>
                            <input 
                                type="text" 
                                className='form-control bg-dark text-white' 
                                placeholder='Nombre del libro' 
                                name='nom_libro' 
                                {...register(
                                    "nom_libro",{ 
                                        required: { 
                                            value: true, 
                                            message: 'Campo Requerido' 
                                        }
                                    }
                                )}
                            />
                            <span>
                                {errors.nom_libro?.type==='required'&&'Campo Requerido'}
                            </span>
                            <input 
                                type="text" 
                                className='form-control bg-dark text-white' 
                                placeholder='Precio' 
                                name='precio' 
                                {...register(
                                    "precio",{ 
                                        required: { 
                                            value: true, 
                                            message: 'Campo Requerido' 
                                        }
                                    }
                                )}    
                            />
                            <span>
                                {errors.precio?.type==='required'&&'Campo Requerido'}
                            </span>
                            <input 
                                type="number" 
                                className='form-control bg-dark text-white' 
                                placeholder='Adelanto' 
                                name='adelanto' 
                                {...register(
                                    "adelanto",{ 
                                        required: { 
                                            value: true, 
                                            message: 'Campo Requerido' 
                                        }
                                    }
                                )}
                            />
                            <span>
                                {errors.adelanto?.type==='required'&&'Campo Requerido'}
                            </span>
                            <input 
                                type="number" 
                                className='form-control bg-dark text-white' 
                                placeholder='Ventas totales' 
                                name='vtot' 
                                {...register(
                                    "vtot",{ 
                                        required: { 
                                            value: true, 
                                            message: 'Campo Requerido' 
                                        }
                                    }
                                )}
                            />
                            <span>
                                {errors.vtot?.type==='required'&&'Campo Requerido'}
                            </span>
                            <input 
                                type="date" 
                                className='form-control bg-dark text-white' 
                                placeholder='Fecha de publicacion' 
                                name='fedepub' 
                                {...register(
                                    "fedepub",{ 
                                        required: { 
                                            value: true, 
                                            message: 'Campo Requerido' 
                                        }
                                    }
                                )}
                            />
                            <span>
                                {errors.fedepub?.type==='required'&&'Campo Requerido'}
                            </span>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-outline-success btn-block '>Registro</button>
                    </div>
                </form>
            </div>
            <div className='card bg-dark text-white'>
                <ul>
                    {props.Titulo.map(Titulo =>(
                        <li key={Titulo.id}>
                            {Titulo.nom_libro} - {Titulo.precio}
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}
export default TitulosF;