package com.dh.clinica.repository.impl;

import com.dh.clinica.model.Odontologo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface OdontologoRepository extends JpaRepository<Odontologo, Integer> {

    @Query("from Odontologo o where o.apellido like %:apellido%")
    List <Odontologo> odontologoApellido(String apellido);


}
