package com.dh.clinica.repository.impl;

import com.dh.clinica.model.Odontologo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OdontologoRepository extends JpaRepository<Odontologo, Integer> {



   // @Query("SELECT o FROM Odontologo o WHERE o.apellido=?1");
    // Optional<Odontologo> buscarApellidoPorApellido(String apellido);

}
