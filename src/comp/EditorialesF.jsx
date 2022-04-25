import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
const EditorialesF = (props) => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data,e) => {
        console.log(data)
        props.addEditorial(data)
        e.target.reset()
    }
    return (   
        <Fragment>
            <div className='card bg-dark text-white align-items-center'>
                <div className='card-header'>
                    <h4>Formulario Editoriales</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='card-body'>
                            <div>
                                <select    
                                    name="editorial" 
                                    placeholder='Editorial' 
                                    className='form-control bg-dark text-white' 
                                    {...register(
                                        "editorial",{
                                            required: { 
                                                value: true, 
                                                message: 'Campo Requerido' 
                                            }
                                        }
                                    )}
                                ><option value="" disabled selected >Seleccione Editorial</option>
                                    {props.Editorial.map(Editorial =>(
                                        <option 
                                            key={Editorial.editorial} 
                                            value={Editorial.editorial}
                                        >
                                        {Editorial.editorial}
                                        </option>
                                    ))}
                                </select>
                                <span>
                                    {errors.editorial?.type === 'required'&&'Campo Requerido'}
                                </span>
                                <select 
                                    name="nombre" 
                                    placeholder='Titulo' 
                                    className='form-control bg-dark text-white'
                                    {...register(
                                        "nombre",{ 
                                            required: { 
                                                value: true, 
                                                message: 'Campo Requerido' 
                                            }
                                        }
                                    )}
                                ><option value="" disabled selected >Seleccione Titulo</option>
                                    {props.Titulo.map(Titulo =>(
                                        <option 
                                            key={Titulo.id} 
                                            value={Titulo.nom_libro}
                                        >
                                        {Titulo.nom_libro}
                                        </option>
                                    ))}
                                </select>
                                <span>
                                    {errors.nombre?.type==='required'&&'Campo Requerido'}
                                </span>
                                <input 
                                    type="text" 
                                    className='form-control bg-dark text-white' 
                                    placeholder='Ciudad' name='ciudad' 
                                    {...register(
                                        "ciudad",{ 
                                            required: { 
                                                value: true, 
                                                message: 'Campo Requerido' 
                                            }
                                        }
                                    )}
                                />
                                <span>
                                    {errors.ciudad?.type==='required'&&'Campo Requerido'}
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
                    {props.Editorial.map(Editorial =>(
                        <li key={Editorial.id}>
                            {Editorial.editorial} - {Editorial.nombre}
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
} 
export default EditorialesF;