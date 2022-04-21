package com.dh.clinica.service;

import com.dh.clinica.exceptions.BadRequestException;
import com.dh.clinica.exceptions.ResourceNotFoundException;
import com.dh.clinica.model.Odontologo;
import com.dh.clinica.model.OdontologoDTO;
import com.dh.clinica.repository.impl.OdontologoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class   OdontologoService {

    private final OdontologoRepository odontologoRepository;

    @Autowired
    public OdontologoService(OdontologoRepository odontologoRepository) {
        this.odontologoRepository = odontologoRepository;
    }

    @Autowired
    ObjectMapper mapper;


    private void saveOdontologo(OdontologoDTO odontologoDTO) {
        Odontologo newOdontologo = mapper.convertValue(odontologoDTO, Odontologo.class);
        odontologoRepository.save(newOdontologo);
    }

    public void registrarOdontologo(OdontologoDTO odontologoDTO) { // llama a la funcion de saveOdontologo
        saveOdontologo(odontologoDTO);
    }

    public Odontologo registrarOdontologo(Odontologo odontologo) { // llama a la funcion de saveOdontologo
        return odontologoRepository.save(odontologo);
    }

    /* public void eliminar(Integer id) {
        odontologoRepository.deleteById(id);
    } */

    /*public void eliminar(Integer id) throws ResourceNotFoundException{
        //if(buscar(id) == null)
        if(!odontologoRepository.existsById(id))
            throw new ResourceNotFoundException("No existe el odontologo con el id:" + id);
        odontologoRepository.deleteById(id);
    } */

    public void eliminarOdontologo(Integer id) throws BadRequestException, ResourceNotFoundException{
        if (!odontologoRepository.existsById(id))
            throw new ResourceNotFoundException("No existe el odontólogo con id: " + id);
        odontologoRepository.deleteById(id);
    }



    /* public Optional<Odontologo> buscar(Integer id) {
        return odontologoRepository.findById(id);
    }*/

    public Optional<Odontologo> buscar(Integer id) throws BadRequestException {
        if(!odontologoRepository.existsById(id))
            throw new BadRequestException("El odontologo con id " + id + " no existe.");
        return odontologoRepository.findById(id);
    }


   /* public Odontologo actualizar(Odontologo odontologo) {
        return odontologoRepository.save(odontologo);
    } */


    //PLAYGRPUND NO FUNCIONA :(
    public Odontologo actualizar(Odontologo odontologo) throws ResourceNotFoundException, BadRequestException {
        if(buscar(odontologo.getId()) == null)
            throw new ResourceNotFoundException("No existe el odontologo" + odontologo.getId()); // le saque el id
        return odontologoRepository.save(odontologo);
    }

    public Odontologo buscarOdontologoPorApellido (String apellido){
        return odontologoRepository.odontologoApellido(apellido);
   }

    public List<Odontologo> buscarTodos() {
        return odontologoRepository.findAll();
    }


}
