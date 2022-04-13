package com.dh.clinica.service;

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
public class OdontologoService {

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


    /* public Odontologo registrarOdontologo(Odontologo odontologo) {
        return odontologoRepository.save(odontologo);

    }*/

    public void registrarOdontologo2(OdontologoDTO odontologoDTO) { // llama a la funcion de saveStudent

        saveOdontologo(odontologoDTO);
    }


    public Odontologo registrarOdontologo(Odontologo odontologo) {
        return odontologoRepository.save(odontologo);

    }

    public void eliminar(Integer id) {
        odontologoRepository.deleteById(id);
    }

    public Optional<Odontologo> buscar(Integer id) {
        return odontologoRepository.findById(id);
    }

    public List<Odontologo> buscarTodos() {
        return odontologoRepository.findAll();
    }

    public Odontologo actualizar(Odontologo odontologo) {
        return odontologoRepository.save(odontologo);
    }

    public Odontologo buscarOdontologoPorApellido (String apellido){
        return odontologoRepository.odontologoApellido(apellido);
   }
}
